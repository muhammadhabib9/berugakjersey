import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {CardLiga} from '../../kecil';
import {connect} from 'react-redux';
import {colors} from '../../../utils';

const ListLiga = ({
  getListLigaResult,
  getListLigaLoading,
  getListLigaError,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      {getListLigaResult ? (
        Object.keys(getListLigaResult).map(key => {
          return (
            <CardLiga
              navigation={navigation}
              liga={getListLigaResult[key]}
              key={key}
              id={key}
            />
          );
        })
      ) : getListLigaLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator color={colors.primary} />
        </View>
      ) : getListLigaError ? (
        <Text>{getListLigaError}</Text>
      ) : (
        <Text>Data Kosong</Text>
      )}
    </View>
  );
};
const mapStateToProps = state => ({
  getListLigaLoading: state.LigaReducer.getListLigaLoading,
  getListLigaResult: state.LigaReducer.getListLigaResult,
  getListLigaError: state.LigaReducer.getListLigaError,
});

export default connect(mapStateToProps, null)(ListLiga);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
  },
});
