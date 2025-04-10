import { PricingCardProps } from "../components/features/pricing/PricingOptions";
import { GroupPricingOption } from "../enums/pricing";

function getPricePerPlayer(selectedOption: PricingCardProps['option'], playerCount: number) {    
    switch (selectedOption?.name) {
        case GroupPricingOption.TEAM_BUILDING:
            if (playerCount >= 20) return 52.5;
            if (playerCount >= 15) return 56.7;
            if (playerCount >= 10) return 60;
            if (playerCount >= 8) return 60;
            return 65;
        case GroupPricingOption.BIRTHDAY_PARTY:
            if (playerCount >= 10) return 52.5;
            if (playerCount >= 8) return 56.7;
            return 60;
        case GroupPricingOption.FRIENDS_GROUP:
            if (playerCount >= 8) return 52.5;
            return 60;
        default:
            return (selectedOption?.price || 0) / (selectedOption?.maxPlayers || 1);
    }
}

export function calculateFlexiblePrice(selectedOption: PricingCardProps['option'], players: string) {
    const playerCount = parseInt(players) || 1;
    const pricePerPlayer = getPricePerPlayer(selectedOption, playerCount) * playerCount;
    return Math.ceil(pricePerPlayer / 5) * 5;
}