import React from 'react';
import { connect } from 'react-redux';

import selectors from '../redux/selectors';
import styles from './UsersView.module.css';

const UsersView = ({ users = [] }) => (
  <table className={styles.table}>
    <thead className={styles.thead}>
      <tr className={styles.tr}>
        <th className={styles.th}>Id</th>
        <th className={styles.th}>Name</th>
        <th className={styles.th}>Surname</th>
        <th className={styles.th}>Description</th>
      </tr>
    </thead>
    <tbody>
      {users.map(({ id, name, surname, desc }) => (
        <tr key={id} className={styles.tr}>
          <td className={styles.td}>{id}</td>
          <td className={styles.td}>{name}</td>
          <td className={styles.td}>{surname}</td>
          <td className={styles.td}>{desc}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const mapStateToProps = state => ({
  users: selectors.getFiveUsers(state)
});

export default connect(
  mapStateToProps,
  null
)(UsersView);
