// content.tsx

'use client';

import { useEffect, useRef } from 'react';
import { SwaggerUIBundle } from 'swagger-ui-dist';
import 'swagger-ui-dist/swagger-ui.css';

export default function PageContent({ spec }: { spec: object }) {
  const swaggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!swaggerRef.current || !spec) return;
    SwaggerUIBundle({
      domNode: swaggerRef.current,
      spec,
    });
  }, [spec]);

  return <div className="swagger-ui-wrapper" ref={swaggerRef} />;
}