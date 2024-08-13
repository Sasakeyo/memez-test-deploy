# memez-test-deploy

install `npm` or `yarn` <br>
Privatekey in `.env` <br>
Networks in `hardhat.config.ts` <br>

1. ignition\modules\MockMEMEZ.ts
config
- [CA](https://github.com/Sasakeyo/memez-test-deploy/blob/main/contracts/MockMEMEZ.sol#L8C48-L8C90)
- [edit](https://github.com/Sasakeyo/memez-test-deploy/blob/main/ignition/modules/MockMEMEZ.ts#L4C3-L5C69)

```
npx hardhat ignition deploy ./ignition/modules/MockMEMEZ.ts --network {xxx}
```

2. ignition\modules\MemezFactory.ts
config
- [CA](https://github.com/Sasakeyo/memez-test-deploy/blob/main/contracts/MemeCoinListingManager.sol#L12-L13)
- [edit](https://github.com/Sasakeyo/memez-test-deploy/blob/main/ignition/modules/MemezFactory.ts#L4C3-L5C124)

```
npx hardhat ignition deploy ./ignition/modules/MemezFactory.ts --network {xxx}
```
