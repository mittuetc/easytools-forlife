
import React, { memo } from 'react';

const ComicsLanguagesSupported = memo(function ComicsLanguagesSupported() {
  return (
    <section className="py-16 bg-white border-b-8 border-black text-center">
      <h2 className="text-3xl font-black uppercase text-black mb-4">Language</h2>
      <div className="bg-[hsl(var(--comic-red,350_85%_55%))] text-white border-4 border-black px-8 py-3 inline-block font-black uppercase shadow-[4px_4px_0_0_#000]">
        English
      </div>
    </section>
  );
});

export default ComicsLanguagesSupported;
