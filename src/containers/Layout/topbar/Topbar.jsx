import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TopbarSidebarButton from './TopbarSidebarButton';
import TopbarProfile from './TopbarProfile';
import TopbarMail from './TopbarMail';
import TopbarNotification from './TopbarNotification';
import TopbarSearch from './TopbarSearch';
import { UserProps } from '../../../shared/prop-types/ReducerProps';

const Topbar = ({
  changeMobileSidebarVisibility, changeSidebarVisibility, user,
}) => (
  <div className="topbar">
    <div className="topbar__left">
      <TopbarSidebarButton
        changeMobileSidebarVisibility={changeMobileSidebarVisibility}
        changeSidebarVisibility={changeSidebarVisibility}
      />
      <Link className="topbar__logo" to="/online_marketing_dashboard" />
    </div>
    <div className="topbar__right">
      {/* <div className="topbar__right-search">
        <TopbarSearch />
      </div> */}
      <div className="topbar__right-over">
        <TopbarNotification />
        <TopbarMail new />
        <TopbarProfile user={user} />
        {/*
          <TopbarLanguage />
          */}
      </div>
    </div>
  </div>
);

Topbar.propTypes = {
  changeMobileSidebarVisibility: PropTypes.func.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
  user: UserProps.isRequired,
};

export default Topbar;
