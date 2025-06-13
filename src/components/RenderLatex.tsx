// src/index.js or src/App.js
import "katex/dist/katex.min.css";

// src/LatexTextRenderer.js
import React from "react";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css"; // Ensure KaTeX CSS is loaded

interface LatexTextRenderer {
  text?: string;
}
function LatexTextRenderer({ text }: LatexTextRenderer) {
  const textWithMath = `
    This paper presents the expected sensitivity to the
neutrino oscillation parameters of the Hyper-Kamiokande
long-baseline program. The Hyper-Kamiokande experi-
ment, currently under construction in Japan, will measure
the oscillations of accelerator-produced neutrinos with thou-
sands of selected events per sample: this corresponds to an
increase of statistics of a factor 25 to 100 with respect
to recent results from the currently-running long-baseline
neutrino oscillation experiment in Japan, T2K. In the most
favorable scenario we will achieve the discovery of Charge-
Parity (CP) violation in neutrino oscillation at 5σ \\mathrm{C.L.} in
less than three years. With 10 years of data-taking, and as-
suming a neutrino : antineutrino beam running ratio of 1:3, a
CP violation discovery at 5σ \\mathrm{C.L.} is possible for more than
60% of the actual values of the CP-violating phase, \\delta_{CP}.
Moreover, we will measure \\delta_{CP} with a precision ranging
from 20◦, in the case of maximal CP violation, to 6◦, in the
case of CP conservation. We aim to achieve a 0.5% resolu-
resolution on the \\Delta_{m32} parameter, and a resolution between 3%
and 0.5% on the \\sin^{2} θ23 parameter, depending on its true
value. These results are obtained by extending the analysis
methods of T2K with dedicated tuning to take into account
the Hyper-Kamiokande design: the larger far detector, the
more powerful beam, the upgraded near detector ND280,
and the planned additional Intermediate Water Cherenkov
Detector
  `;

  return (
    <>
      <Latex>{textWithMath}</Latex>
    </>
  );
}

export default LatexTextRenderer;
