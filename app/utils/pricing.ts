import { PricingCardProps } from "../components/features/pricing/PricingOptions";

function getPricePerPlayer(selectedOption: PricingCardProps['option'], playerCount: number) {
    console.log("Groupe d'Amis" === selectedOption?.name)
    
    switch (selectedOption?.name) {
        case 'Team Building':
            if (playerCount >= 20) return 52.5;
            if (playerCount >= 15) return 56.7;
            if (playerCount >= 10) return 60;
            if (playerCount >= 8) return 60;
            return 65; // Par défaut pour très petits groupes
        case "Fête d'Anniversaire":
            if (playerCount >= 10) return 52.5;
            if (playerCount >= 8) return 56.7;
            return 60;
        case "Groupe d'Amis":
            if (playerCount >= 8) return 52.5;
            if (playerCount >= 4) return 56.7;
            return 60;
        default:
            return (selectedOption?.price || 0) / (selectedOption?.maxPlayers || 1);
    }
}

export function calculateFlexiblePrice(selectedOption: PricingCardProps['option'], formData: { players: string }) {
    const playerCount = parseInt(formData.players) || 1;
    const pricePerPlayer = getPricePerPlayer(selectedOption, playerCount) * playerCount;
    return Math.round(pricePerPlayer);
}