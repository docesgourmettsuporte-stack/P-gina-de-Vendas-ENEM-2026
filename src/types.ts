export interface BonusItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  originalPrice: number;
  iconName: string;
  highlightTag?: string;
  image?: string;
}

export interface OrderBumpItem {
  id: string;
  tag: string;
  title: string;
  price: number;
  originalPrice: number;
  description: string;
  icon: string;
  recommended?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'student' | 'support';
  text?: string;
  time: string;
  isAudio?: boolean;
  audioDuration?: string;
  attachedImage?: {
    type: 'sisu_approval' | 'enem_boletim' | 'photo';
    title: string;
    scoreHighlight?: string;
    imageUrl?: string;
  };
  reaction?: string;
}

export interface WhatsAppTestimonial {
  id: string;
  studentName: string;
  studentAvatar: string;
  targetCourse: string;
  university: string;
  universityShort: string;
  city: string;
  statusText: string;
  dateBadge: string;
  approvalTag: string;
  messages: ChatMessage[];
  scoreEvolution: {
    previous: number;
    achieved: number;
    redacao?: number;
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  targetCourse: string;
  university: string;
  universityShort: string;
  category: 'medicina' | 'direito' | 'engenharia' | 'saude_humanas' | 'redacao';
  type: 'video' | 'text' | 'whatsapp';
  videoThumbnail?: string;
  videoDuration?: string;
  videoQuote?: string;
  previousScore: number;
  achievedScore: number;
  redacaoScore?: number;
  approvalBadge: string;
  sisuRanking?: string;
  comment: string;
  decisiveStrategy: string;
  securityImpact: string;
  timeSpent: string;
  verified: boolean;
  avatarUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'metodo' | 'acesso' | 'garantia' | 'conteudo';
}

export interface MaterialSample {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  previewType: 'redacao' | 'tri' | 'formulas' | 'cronograma';
  description: string;
  highlights: string[];
}

export interface TargetCourseOption {
  id: string;
  name: string;
  averageCutoff: number;
  weightFocus: string;
  urgencyLevel: 'Alta' | 'Altíssima' | 'Extrema';
  estimatedJump: string;
}
