// Making a generic function: a function that can take any data type as parameter
function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let str = initial;
  return [
    () => str,
    (v: T) => {
      str = v;
    },
  ];
}
const [st1getter, st1setter] = simpleState(10);
console.log(st1getter());
st1setter(60);
console.log(st1getter());

// over riding inferred generic types
// generic types are over ride by writing type options in between anchors(<>)
const [st2getter, st2setter] = simpleState<string | null>(null);
console.log(st2getter());
st2setter("str");
console.log(st2getter());

// example 2: Ranker
// declaring generic interface
interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}
// using generic interface in a function
function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

// declaring a generic array data type
const pokemon: Pokemon[] = [
  {
    name: "Bulbasaur",
    hp: 20,
  },
  {
    name: "Megaasaur",
    hp: 5,
  },
];

// using ranker function to rank a generic defined data
const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
