import { joinURL } from 'ufo';
import type { ProviderGetImage } from '@nuxt/image'
import { createOperationsGenerator } from "#image";

const operationGenerator = createOperationsGenerator();

export const getImage: ProviderGetImage = (src, { modifiers = {}, baseURL } = {} ) => {
  if (!baseURL) {
    //TODO: test
    const { s3ImageBaseURL } = useRuntimeConfig().public;
    baseURL = s3ImageBaseURL;
  }
  const operations = operationGenerator(modifiers);
  return {
    url: joinURL(baseURL, src + (operations ? '?' + operations : '') )
  }
}


