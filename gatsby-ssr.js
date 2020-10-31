import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents ([
    <script src="/vendor/jquery.min.js"></script>
  ]);
};