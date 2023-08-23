'use client'

import React from 'react';
import SwaggerUI from 'swagger-ui-react';

type SwaggerType = {
  url: string;
}

const Swagger = ({ url }: SwaggerType) => (
  <SwaggerUI url={url} />
);

export default Swagger;
