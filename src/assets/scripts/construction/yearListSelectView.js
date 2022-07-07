export const yearOptionsView = ({ year }) => {
  return `
              <option value="${year}">${year}</option>
          `;
};
export const yearListSelectView = items => {
  return items.map(item => yearOptionsView(item)).join('');
};
