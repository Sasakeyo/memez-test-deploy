import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const MemezFactory = buildModule('MemezFactory', (m) => {
  const memezAddress = m.getParameter('memez', "0x4527d042F7Fef894aD52a8E7d08951315c135B13"); // edit address = Memez token
  const treasuryAddress = m.getParameter('treasury', "0x215db47f1B2ae03ec45024Cf62ce82879b137469"); // edit address = Owner

  const formula = m.contract('Formula', []);
  m.call(formula, 'init');

  const listingManager = m.contract('MemeCoinListingManager', [
    memezAddress,
    treasuryAddress,
  ]);

  const memezFactory = m.contract('MemezFactory', [formula, listingManager]);

  return { memezFactory };
});

export default MemezFactory;
