export const monthOptionsView = ({ name, value }) => {
  const selectValue = value || value === '' ? value : name;
  return `
            <option value="${selectValue}">${name}</option>
        `;
};
export const monthListSelectView = items => {
  return [{ name: 'Місяць', value: '' }, ...items].map(item => monthOptionsView(item)).join('');
};
