import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function ProjectBrowser() {
  const navigate = useNavigate();
  return (
    <div className="browser">
      <header className="browser-header">
      </header>
      <main className="browser-body">
      </main>
    </div>
  );
}
