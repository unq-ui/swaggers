import React from 'react';
import { redirect } from 'next/navigation';

import Swagger from '@/components/Swagger';

type ObjectWithStringKeys = {
  [key in string ]: string
}

type NextPage = {
  params: { [key: string]: string },
  searchParams: { [key: string]: string | string[] | undefined }
}

const getSwaggerUrl = (nameApp: string): string => {
  const swaggers: ObjectWithStringKeys = {
    steam: '/swaggers/steam.json',
    drinks: '/swaggers/drinks.json',
    tiktok: '/swaggers/tiktok.json',
    mercadolibre: '/swaggers/mercadolibre.json',
    medium: '/swaggers/medium.json',
    cinetickets: '/swaggers/cinetickets.json',
    gog: '/swaggers/gog.json',
  }
  return swaggers[nameApp] || ''
}

const SteamSwagger = (context: NextPage) => {
  const app = getSwaggerUrl(context.params.appName);
  if (!app) redirect('/')
  return (
    <Swagger url={app} />
  )
}

export default SteamSwagger;
