function solution(spell, dic) {
    const sortedSpell = spell.sort().join('');
    return dic.map(word => word.split('').sort().join('')).filter(word => word === sortedSpell).join('') ? 1 : 2
}