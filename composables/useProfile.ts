import type { Profile } from '@/shareds/composables/useProfile/types';

import profile from '@/assets/data/profile.json';
import projects from '@/assets/data/recent-projects.json';
import experiences from '@/assets/data/experiences.json';
import skills from '@/assets/data/skills.json';
import clientComments from '@/assets/data/client-comments.json';

export const useProfile = () => {
  const { t } = useI18n();

  const getSelectedLocation = (keys: (keyof Profile['location'])[]): string => {
    const location = profile.location;
    const selectedLocation: string[] = keys.map((key) => t(location[key]));
    const result = selectedLocation.join(', ');

    return result;
  };

  return {
    data: profile,
    recent_projects: projects,
    experiences,
    skills,
    client_comments: clientComments,
    getSelectedLocation
  };
};
