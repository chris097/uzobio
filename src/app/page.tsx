import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import banner from '../../public/banner.jpg';

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <main>
        <div className='h-auto md:py-10 py-5 bg-black mt-20'>
          <div className='lg:max-w-7xl w-[90%] mx-auto md:py-10 py-5'>
            <div className='bg-[#1A1A1A] md:w-[243.35px] w-[175px] text-center md:py-3 py-2 rounded border border-white/25 text-white font-pro-display font-[500] md:text-[19.87px] text-[14px] leading-[23.71px]'>
              About Uzobankz
            </div>
            <div className='flex gap-16 text-white md:mt-10 mt-4 lg:flex-row flex-col-reverse'>
              <Image loading="lazy" src={banner} className='bg-cover object-cover lg:mt-0 -mt-10 lg:w-[42%]' alt='' />
              <p className="text-sm text-[#707070] p-5 leading-6">
                Born on February 17, 1972 in Chattanooga, Tennessee and raised in Clarksville, Arkansas, Ralph Duren May was one of four kids raised by his single mother. At the age of seventeen he won a contest to open for his idol, Sam Kinison. He later moved to Houston to develop his comedy routine, at Kinison&apos;s suggestion.
                “All the comics I&apos;ve ever admired, whether it be Kinison, Lenny Bruce, Buddy Hackett or Richard Pryor, all share a commonality: They&apos;re a tour de force. When they speak, there&apos;s no room for rebuttal. They&apos;ve thought it all out. Even the pros and cons of their argument, they raise openly and debate in the midst of their conversation and it&apos;s a beautiful thing to watch.”
                Ralphie worked the stand-up circuit for years and in 2002 made his feature film debut in For da Love of Money.
                In 2003 Ralphie was chosen to participate in the inaugural season of NBC&apos;s Last Comic Standing where he won second place. After his debut on the program, audiences couldn&apos;t get enough of the larger than life comedian. On the small screen, Ralphie worked as a writer and producer on ESPN&apos;s “Mohr Sports” starring Jay Mohr and performed stand-up on numerous late-night talk shows including four appearances on CBS&apos;s The Late Late Show with Craig Kilborn as well as eleven appearances on Jimmy Kimmel Live. He appeared on The Man Show and MTV&apos;s Bash as well as guest-starred on NBC&apos;s Whoopie. He was also one of a handful of comedians to have received a standing ovation on The Tonight Show with Jay Leno.
                Ralphie released his first comedy album Just Correct in 2004, followed by four Comedy Central Specials titled Girth of a Nation (2006), Prime Cut (2007), Austintatious (2008) and Too Big to Ignore (2012), as well as two Netflix specials titled Imperfectly Yours (2013) and Unruly (2015). Ralphie&apos;s memoir, This Might Get a Little Heavy, was published posthumously in December 2017.
                Voted one of Variety&apos;s “10 Comics to Watch,” Ralphie had a proven track record of selling out multiple shows in 1,500 to 3,000 seat venues with his no-nonsense point of view and the ability to connect with a diverse audience by pointing out society&apos;s hypocrisies. Ralphie never shied away from touchy topics or ethnic jokes, nor did he bite his tongue when society suggested because he sincerely believed that as long as what he said was true, people needed to hear it. Lovable enough to get away with anything, Ralphie captured the hearts of millions on his sold-out tours, stand-up specials and comedy routines.
                Ralphie married his wife Lahna Turner on July 3, 2005. The couple had two children: daughter April June May and son August James May. In 2013, May and Lahna started the Perfect 10 podcast together.
                Ralphie passed away on October 6, 2017 in Las Vegas where he had been in residence at Harrah&apos;s casino. He had just won the Casino Comedian of the Year award at the Global Gaming Expo. He was 45 years old.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
