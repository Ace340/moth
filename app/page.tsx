import Image from 'next/image'
import { client, urlFor } from './lib/sanity';
import { simpleBlogCard } from './lib/interface';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const revalidate = 30;

async function getData() {
  const query = `
  *[_type == 'post'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    author,
    titleImage,
    alt,
    categories,
    publishedAt
  }`;

 const data = await client.fetch(query);

return data;
}


export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  return (
    <div >
    <hr className="border-red-900 mb-10 mt-10" />

    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {data.map((post, idx) => (
        <Card key={idx} className="group cursor-pointer">
          <Image 
            src={urlFor(post.titleImage).url()}
            alt='image'
            width={500}
            height={500}
            className="rounded-t-lg h-[200px] object-cover w-full"
      />
      

          <CardContent className="mt-5 group-hover:scale-105 transition-transform duration-200 ease-out">
            <h3 className="text-lg line-clamp-2 text-primary font-bold">{post.title}</h3>
            <p className="line-clamp-3 text-small mt-2 text-gray-600 dark:text-gray-300">{post.smallDescription}</p>
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
            </Button>   
            {/*<p>{post.category}</p>*/}       
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
  )
}
