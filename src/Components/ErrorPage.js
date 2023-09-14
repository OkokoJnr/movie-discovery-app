import React from 'react';

function ErrorPage({ message }) {
  return (
    <div className="error-page">
      <p>Error: {message}</p>
    </div>
  );
}

export default ErrorPage;
