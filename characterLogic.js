// Создаёт начальный массив атрибутов с базовыми значениями (4 для каждого)
export function createInitialAttributes() {
  return [
    { name: 'СИЛ', value: 4 },
    { name: 'ВЫН', value: 4 },
    { name: 'ВСП', value: 4 },
    { name: 'ЛОВ', value: 4 },
    { name: 'ИНТ', value: 4 },
    { name: 'ХАР', value: 4 },
    { name: 'УДЧ', value: 4 },
  ];
}

// Вычисляет сколько очков атрибутов осталось распределить
export function getRemainingAttributePoints(attributes) {
  // Допустим, у нас есть 5 дополнительных очков для распределения
  const totalPointsToDistribute = 12;
  const baseTotal = attributes.length * 4; // 7 * 4 = 28
  const currentTotal = attributes.reduce((sum, attr) => sum + attr.value, 0);
  const spentPoints = currentTotal - baseTotal;
  return totalPointsToDistribute - spentPoints;
}

// Максимальные очки навыков зависят от уровня и атрибутов
export function getSkillPoints(attributes, level) {
  // Пример: сумма (ИНТ * 2) + (уровень * 3)
  const intAttr = attributes.find(attr => attr.name === 'ИНТ')?.value || 0;
  return intAttr * 2 + level * 3;
}

// Считает сколько уже потрачено очков на выбранные навыки
export function calculateSkillPointsUsed(skills, selectedSkills) {
  // Считаем только очки потраченные на выбранные навыки
  let total = 0;
  for (const skill of skills) {
    if (selectedSkills.includes(skill.name)) {
      // Базовое значение для выбранного навыка (2 очка на 1 уровне)
      // Дополнительные очки считаются как потраченные
      const baseValue = 2;
      const additionalPoints = Math.max(0, skill.value - baseValue);
      total += additionalPoints;
    }
  }
  return total;
}

// Расчёт очков удачи по атрибутам
export function getLuckPoints(attributes) {
  // Очки удачи равны значению атрибута УДЧ
  const luckAttr = attributes.find(attr => attr.name === 'УДЧ')?.value;
  return luckAttr ?? 0;
}

// Максимальное количество выбираемых навыков, зависит от trait (черты)
export function getMaxSelectableSkills(trait) {
  if (!trait) return 3; // стандартное значение
  const baseSkills = 3;
  const extraSkills = trait.extraSkills || 0;
  return baseSkills + extraSkills;
}

// Проверка границ атрибутов с учётом trait (minLimits и maxLimits)
export function canChangeAttribute(value, attrName, delta, trait) {
  const nextValue = value + delta;
  const { min, max } = getAttributeLimits(trait, attrName);
  if (nextValue < min || nextValue > max) {
    return false;
  }
  return true;
}

// Проверка максимума навыка с учетом trait.skillMaxValue
export function canChangeSkillValue(currentValue, delta, trait, level, isTagged) {
  const nextValue = currentValue + delta;
  
  // Если есть черта с ограничением навыков, используем её
  if (trait?.skillMaxValue) {
    if (nextValue < 0 || nextValue > trait.skillMaxValue) {
      return false;
    }
  } else {
    // Стандартная логика
    const skillMax = level === 1 ? (isTagged ? 3 : 3) : 6;
    if (nextValue < 0 || nextValue > skillMax) {
      return false;
    }
  }
  
  return true;
}

export const BASE_MIN_ATTRIBUTE = 4;
export const BASE_MAX_ATTRIBUTE = 10;
export const BASE_TAGGED_SKILLS = 3;

// Универсальная функция для получения лимитов атрибутов
export const getAttributeLimits = (trait, attrName) => {
  return {
    min: trait?.minLimits?.[attrName] ?? BASE_MIN_ATTRIBUTE,
    max: trait?.maxLimits?.[attrName] ?? BASE_MAX_ATTRIBUTE
  };
};

// Универсальная проверка навыков
export const validateSkills = (skills, trait) => {
  const maxRank = trait?.skillMaxValue ?? 6; // 6 - дефолтный максимум
  
  return {
    isValid: skills.every(s => s.value <= maxRank),
    maxRank
  };
};