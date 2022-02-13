function createRNG(seedPhrase)
{
    return mulberry32(xmur3(seedPhrase)());
}

export default
{
    createRNG
}

//Everything below is shamelessly plagiarized from SO: https://stackoverflow.com/a/47593316
//All I did was amend their hideous brace style
//No no don't @ me this is the only good one and I won't hear otherwise

//Seed function:
function xmur3(str)
{
    for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
    {
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
        h = h << 13 | h >>> 19;
    }
    
    return function()
    {
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        return (h ^= h >>> 16) >>> 0;
    }
}

//PRNG:
function mulberry32(a)
{
    return function()
    {
        var t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}