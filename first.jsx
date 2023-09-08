import React from 'react';

const Welcome = () => {
  return (
    <div className="bg-violet-900 min-h-screen">
      <div className="m-8 pb-4 h-screen w-screen grid place-content-center">
        <img className="h-90 w-90" src="undraw_engineering_team_a7n2.svg" alt="image" />
      </div>
      <div className="grid place-content-center">
        <i className="text-7xl text-white m-8">NOTE   TAKE   PLUS</i>
      </div>
      <div className="grid place-content-end mr-8 mb-6">
        <button className="bg-white rounded-full font-bold italic h-10 w-60 hover:bg-slate-300">LETS GET STARTED</button>
      </div>
    </div>
  );
};

export default Welcome;
