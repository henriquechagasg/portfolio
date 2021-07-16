import { LanguageContextProvider } from "./language-context/language.context";
import { PlayerContextProvider } from "./player-context/player.context";
import { LocationContextProvider } from './locationref-context/locationref.context'

export function CombinedProviders({children}) {

    return (
        <LanguageContextProvider>
            <PlayerContextProvider>
                <LocationContextProvider>
                    {children}
                </LocationContextProvider>
            </PlayerContextProvider>
        </LanguageContextProvider>
    )
}