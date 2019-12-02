import { connect } from 'react-redux';
import ChapterFilters from '../components/ChapterFilters';
import { setFilters } from '../actions/filters';

const mapStateToProps = state => {
  return {
    chapters: state.chapters,
    filters: state.filters,
    visible: state.ui.chaptersVisible,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFilterClick: name => dispatch(setFilters(name)),
    sortChaptersFn: (a, b) => {
      // sorts chapters alphabetically and using chapter numbers.
      // Need this otherwise Chapter 10 comes before Chapter 2.
      if (a[0] < b[0]) return -1;

      return a[0] === b[0]
        ? parseInt(a.match(/\d/g).join(''), 10) -
            parseInt(b.match(/\d/g).join(''), 10)
        : null;
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChapterFilters);
