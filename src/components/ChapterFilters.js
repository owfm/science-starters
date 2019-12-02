import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import uuidv1 from 'uuid/v1';

const ChapterFilters = ({
  chapters = [],
  filters = [],
  visible,
  onFilterClick,
  sortChaptersFn,
}) => {
  if (!visible) return null;

  return (
    <>
      <FormGroup row>
        {chapters.sort(sortChaptersFn).map(chapter => (
          <FormControlLabel
            key={uuidv1()}
            control={
              <Checkbox
                checked={filters.includes(chapter)}
                onChange={() => onFilterClick(chapter)}
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
