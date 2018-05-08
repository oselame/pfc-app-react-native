// src/styles/general.js

import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
  section: {
    margin: metrics.doubleBaseMargin,
  },
  statusBar: {
    backgroundColor: '#ff0000', 
    elevation: 4, 
    marginBottom: 6
  },
  sectionTitle: {
    color: colors.title,
    fontWeight: 'bold',
    fontSize: fonts.title,
    alignSelf: 'center',
    paddingRight: 5,
    marginBottom: metrics.smallMargin,
  },
  sectionText: {
    color: colors.title,
    fontSize: fonts.input,
    alignSelf: 'center',
    paddingRight: 5,
    marginBottom: metrics.smallMargin,
  },
  touchableHighlight: {
    color: colors.title,
    fontSize: fonts.regular,
    alignSelf: 'center',
    paddingRight: 5,
    marginBottom: metrics.smallMargin,
  },
  touchableHighlightPrincipal: {
    color: colors.title,
    fontSize: fonts.regular,
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingRight: 5,
    marginBottom: metrics.smallMargin,
  },
};

export default general;
