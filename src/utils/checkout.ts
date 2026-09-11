/**
 * URLs oficiais dos checkouts de pagamento (Lowify)
 */
export const CHECKOUT_URLS = {
  // Pacote Completo VIP com todos os bônus (R$ 27,90)
  complete: 'https://pay.lowify.com.br/checkout.php?product_id=hiBrVp',
  
  // Pacote Básico Essencial (R$ 14,99)
  basic: 'https://pay.lowify.com.br/checkout?product_id=QndzPD',
  
  // Oferta Especial de Desconto Instantâneo (R$ 19,90)
  discountOffer: 'https://pay.lowify.com.br/go.php?offer=gs8jxe1',
} as const;

/**
 * Constrói a URL final de checkout anexando e forçando a passagem de
 * todos os parâmetros de URL da página atual (UTMs, tracking, referrers, src, sck, etc.)
 * utilizando window.location.search de forma segura.
 *
 * @param destinationUrl - URL de destino do checkout
 * @returns URL final com todos os parâmetros preservados
 */
export function buildCheckoutUrlWithParams(destinationUrl: string): string {
  if (typeof window === 'undefined') {
    return destinationUrl;
  }

  try {
    const url = new URL(destinationUrl);
    const currentParams = new URLSearchParams(window.location.search);
    
    // Adiciona cada parâmetro da página atual na URL de destino (preservando parâmetros já existentes)
    currentParams.forEach((value, key) => {
      if (!url.searchParams.has(key)) {
        url.searchParams.set(key, value);
      }
    });

    return url.toString();
  } catch {
    // Fallback caso URL falhe
    const currentSearch = window.location.search;
    if (!currentSearch || currentSearch.trim() === '' || currentSearch === '?') {
      return destinationUrl;
    }
    const cleanParams = currentSearch.startsWith('?') ? currentSearch.slice(1) : currentSearch;
    const cleanBase = destinationUrl.replace(/[?&]+$/, '');
    const separator = cleanBase.includes('?') ? '&' : '?';
    return `${cleanBase}${separator}${cleanParams}`;
  }
}

/**
 * Dispara evento do Meta Pixel (se disponível) para rastrear início de checkout
 */
export function trackCheckoutEvent(planName: string, value: number): void {
  if (typeof window !== 'undefined' && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
    try {
      (window as unknown as { fbq: (...args: unknown[]) => void }).fbq('track', 'InitiateCheckout', {
        content_name: planName,
        value: value,
        currency: 'BRL',
      });
    } catch {
      // Ignora erro em caso de bloqueador
    }
  }
}

/**
 * Redireciona o usuário para o checkout utilizando window.location.href
 * e garantindo que todos os parâmetros de URL da página (window.location.search)
 * sejam passados para a próxima página de checkout.
 *
 * @param destinationUrl - URL de destino do checkout
 * @param planName - Nome do plano para rastreamento (opcional)
 * @param value - Valor do plano (opcional)
 */
export function redirectToCheckout(destinationUrl: string, planName?: string, value?: number): void {
  if (planName && value) {
    trackCheckoutEvent(planName, value);
  }
  const finalUrl = buildCheckoutUrlWithParams(destinationUrl);
  window.location.href = finalUrl;
}
