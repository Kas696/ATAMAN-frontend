import { defineStore } from "pinia";
import type { Crypto } from "~/types/types";

// Импорт иконок криптовалют
import btcIcon from "~/assets/btc.svg";
import ethIcon from "~/assets/eth.svg";
import solIcon from "~/assets/sol.svg";
import cetIcon from "~/assets/cet.svg";
import ltcIcon from "~/assets/ltc.svg";
import xrpIcon from "~/assets/xrp.svg";

export const useCryptoIconsStore = defineStore("cryptoIcons", () => {
    const cryptoIcons: { [key in Crypto]: string } = {
        btc: btcIcon,
        eth: ethIcon,
        sol: solIcon,
        cet: cetIcon,
        ltc: ltcIcon,
        xrp: xrpIcon,
    };

    const getIcon = (crypto: Crypto) => cryptoIcons[crypto] || "";

    return { getIcon };
});
