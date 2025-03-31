import { TimelineItemData } from '../../types';

// Define extended timeline item type with children support
export interface TimelineItemWithChildren extends TimelineItemData {
  children?: TimelineItemWithChildren[];
} 