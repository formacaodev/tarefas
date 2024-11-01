import { StyleSheet } from 'react-native'
import { bgBlue500, px4, py2, roundedMd } from './utility'

const style = StyleSheet.create({
    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: roundedMd.borderRadius,
        paddingHorizontal: px4.paddingHorizontal,
        paddingVertical: py2.paddingVertical,
        backgroundColor: bgBlue500.backgroundColor,
    },
    input: {
        borderRadius: roundedMd.borderRadius,
        paddingHorizontal: px4.paddingHorizontal,
        paddingVertical: py2.paddingVertical,
        borderColor: bgBlue500.backgroundColor,
        borderWidth: 2,
    },
})

export const botao = style.botao
export const input = style.input
