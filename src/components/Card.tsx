import { useState } from '@lynx-js/react';
import type { Pokemon } from '../shares/pokemon.model';
import { capitalize } from '../helpers/capitalize';
import '../App.css'

export function PokemonCard({ pokemon, onClick }: { pokemon: Pokemon; onClick: () => void }) {
  const [imageError, setImageError] = useState(false);

  const primaryType = pokemon.types[0] || 'unknown';

  return (
    <view className={`Card Type-${primaryType}`} bindtap={onClick}>
      {!imageError && pokemon.imageUrl ? (
        <view style={'position: relative;'}>
          <image mode="aspectFit" src={'https://mpaas.vercel.app/assets/images/pokeball.png'} className="bg-image" />
          <image
          style={'position: relative;'}
            src={pokemon.imageUrl}
            className="CardImage"
            mode="aspectFit"
            binderror={() => setImageError(true)}
          />
        </view>
      ) : (
        <view className="CardImagePlaceholder">
          <text className="PlaceholderText">No Image</text>
        </view>
      )}
      <view className="CardContent">
        <text className="CardId">#{pokemon.id.toString().padStart(3, '0')}</text>
        <text className="CardName">{capitalize(pokemon.name)}</text>
        <view className="TypeContainer">
          {pokemon.types.map(type => (
            <text key={type} className={`TypeBadge Type-${type}`}>{type.toUpperCase()}</text>
          ))}
        </view>
      </view>
    </view>
  );
};