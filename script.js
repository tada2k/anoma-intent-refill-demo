// ===== Settlement sim =====
btnSettle.addEventListener('click', ()=>{
  if(!INTENT || !SOLVE) return;
  // Constraint checks (toy):
  // Fail chance goes down with privacy and low slippage.
  let failChance = 0.25;
  failChance -= INTENT.constraints.privacy ? 0.12 : 0;
  failChance -= (INTENT.constraints.maxSlippagePct <= 0.5 ? 0.07 : 0);
  failChance = clamp(failChance, 0.05, 0.35);

  const roll = Math.random();
  const ok = roll > failChance;

  if(ok){
    settleBox.classList.remove('fail');
    settleBox.classList.add('success');
    settleBox.innerHTML = `
      ✅ <strong>Settlement succeeded</strong><br/>
      Constraints honored: slippage ≤ ${INTENT.constraints.maxSlippagePct}%, time bound ${INTENT.constraints.timeBound}, fee rule “${INTENT.constraints.feeRule}”.<br/>
      Funds delivered to <code>${INTENT.target.to}</code> on <strong>${INTENT.target.chain}</strong>.
    `;
  }else{
    settleBox.classList.remove('success');
    settleBox.classList.add('fail');
    const reasons = [
      "price moved beyond slippage limit",
      "time bound exceeded under current network load",
      "route privacy failed due to venue leakage"
    ];
    settleBox.innerHTML = `
      ❌ <strong>Settlement failed</strong><br/>
      Reason: ${pick(reasons)}.<br/>
      Adjust constraints (e.g., raise slippage, relax time bound, or keep privacy ON) and try again.
    `;
  }
});

// ===== Reset =====
btnReset.addEventListener('click', ()=>{
  INTENT = null; SOLVE = null;
  intentJson.textContent = "(compose an intent above)";
  intentMeta.textContent = "—";
  btnCopyIntent.disabled = true;
  btnSolve.disabled = true;
  solveArea.style.display = 'none';
  toAddress.value = "";
});