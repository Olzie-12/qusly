import { Strategy } from '~/strategies/strategy';
import { FtpStrategy } from '~/strategies/ftp';

interface IStrategyMap {
  [key: string]: typeof Strategy;
}

export class StrategyManager {
  private static map: IStrategyMap = {
    ftp: FtpStrategy,
    ftps: FtpStrategy,
  };

  public static register(protocol: string, provider: any) {
    if (!protocol) throw new Error(`Protocol ${protocol} is not provided`);
    if (!provider) throw new Error('Strategy is not provided');
    if (this.map[protocol])
      throw new Error(`Protocol ${protocol} is already registered`);

    this.map[protocol] = provider;
  }

  public static unregister(protocol: string) {
    if (!this.map[protocol]) throw new Error(`Protocol ${protocol} not found`);

    delete this.map[protocol];
  }

  public static get(protocol: string) {
    const strategy = this.map[protocol];

    if (!strategy)
      throw new Error(`Strategy for protocol ${protocol} not found`);

    return strategy;
  }
}
