// components/modals/index.js
import BrotherhoodModal, { traitConfig as brotherhoodConfig } from './BrotherhoodModal';
import SupermutantModal, { traitConfig as supermutantConfig } from './SupermutantModal';
// другие импорты

export const TRAIT_MODALS = {
  [brotherhoodConfig.originName]: BrotherhoodModal,
  [supermutantConfig.originName]: SupermutantModal,
  // остальные
};

export const TRAIT_CONFIGS = {
  [brotherhoodConfig.originName]: brotherhoodConfig,
  [supermutantConfig.originName]: supermutantConfig,
  // остальные
};

export const getTraitModalComponent = (originName) => {
  return TRAIT_MODALS[originName] || null;
};

export const getTraitConfig = (originName) => {
  return TRAIT_CONFIGS[originName] || null;
};