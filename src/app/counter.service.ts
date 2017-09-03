export class CounterService {
  activeToInactiveCount: number = 0;
  inActiveToActiveCount: number = 0;

  incrementActiveToInactiveCount() {
    this.activeToInactiveCount++;
    console.log('Active to Inactive count : ', this.activeToInactiveCount);
  }

  incrementInactiveToActiveCount() {
    this.inActiveToActiveCount++;
    console.log('Inactive to Active count', this.inActiveToActiveCount);
  }
}
