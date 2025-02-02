'use client';
import { Button, ButtonGroup } from '@webstuff/ui';

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <ButtonGroup>
          <Button
            onClick={() => console.log('HELLO WORLD')}
            ref={undefined}
            type={undefined}
            href={undefined}
          >
            Hello world
          </Button>
          <Button>I'm a link</Button>
        </ButtonGroup>
      </main>
    </div>
  );
}
