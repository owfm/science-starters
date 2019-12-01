import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import uuidv1 from 'uuid/v1';

const ChapterFilters = ({ chapters = [], setFilters, filters, visible }) => {
  if (!visible) return null;

  const handleChange = name => event => {
    if (filters.includes(name)) {
      setFilters(filters.filter(f => f !== name));
    } else {
      setFilters([...filters, name]);
    }
  };

  return (
    <>
      <FormGroup row>
        {chapters.sort(sortChaptersFn).map(chapter => (
          <FormControlLabel
            key={uuidv1()}
            control={
              <Checkbox
                checked={filters.includes(chapter)}
                onChange={handleChange(chapter)}
                value={chapter}
              />
            }
            label={chapter}
          />
        ))}
      </FormGroup>
    </>
  );
};

export default ChapterFilters;

function sortChaptersFn(a, b) {
  // sorts chapters alphabetically and using chapter numbers.
  // Need this otherwise Chapter 10 comes before Chapter 2.
  if (a[0] < b[0]) return -1;

  return a[0] === b[0]
    ? parseInt(a.match(/\d/g).join(''), 10) -
        parseInt(b.match(/\d/g).join(''), 10)
    : null;
}
