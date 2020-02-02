import React from 'react';
import {ProjectBlock} from '.';

const HomePage = () => {
  return (
    <div>
      <ProjectBlock
        skills={['reactNative', 'node', 'firebase']}
        image={'../assets/project-mbrt.png'}
        imageAlt={'Darkweb ID'}
        title={'Way to Be! Mobile App'}
        mainDescription={'\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at velit erat. Aenean eu accumsan justo. Morbi varius est at diam auctor, sed sagittis ex gravida. Nulla at nibh rhoncus, lobortis lectus non, pretium sem. Curabitur nec magna semper, scelerisque nisi et, malesuada nulla. Nullam ac quam lectus. Morbi sit amet lectus lectus. Vestibulum congue consequat nisl, in consectetur felis venenatis eget. Nunc non magna velit. Ut vitae erat molestie, gravida ex sit amet, tincidunt orci. Fusce lacinia ac felis ac maximus. Donec gravida quis augue eu sagittis.\n' +
        '\n' +
        'Vestibulum molestie mauris ultrices dui lobortis tincidunt. Nam dignissim augue a libero tempor bibendum. Pellentesque venenatis enim vel posuere consectetur. Quisque neque dui, placerat venenatis ultricies quis, imperdiet ac justo. Integer eget tristique massa, eu aliquam ligula. Aenean sodales varius lorem quis consectetur. Sed lobortis luctus risus, id elementum lacus interdum ac. In et urna id ante iaculis finibus. Mauris vel eros imperdiet, suscipit velit sed, eleifend ipsum.\n'}
        subTitle={'The Subtitle'}
        secondDescription={'Second description goes here'}/>

        <ProjectBlock
          alternate
          link={'https://www.idagent.com/dark-web/'}
          skills={['drupal', 'laravel', 'php', 'sass', 'jquery', 'aws', 'node']}
          image={'../assets/project-darkweb.png'}
          imageAlt={'Darkweb ID'}
          title={'Darkweb ID'}
          mainDescription={'\n' +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at velit erat. Aenean eu accumsan justo. Morbi varius est at diam auctor, sed sagittis ex gravida. Nulla at nibh rhoncus, lobortis lectus non, pretium sem. Curabitur nec magna semper, scelerisque nisi et, malesuada nulla. Nullam ac quam lectus. Morbi sit amet lectus lectus. Vestibulum congue consequat nisl, in consectetur felis venenatis eget. Nunc non magna velit. Ut vitae erat molestie, gravida ex sit amet, tincidunt orci. Fusce lacinia ac felis ac maximus. Donec gravida quis augue eu sagittis.\n' +
          '\n' +
          'Vestibulum molestie mauris ultrices dui lobortis tincidunt. Nam dignissim augue a libero tempor bibendum. Pellentesque venenatis enim vel posuere consectetur. Quisque neque dui, placerat venenatis ultricies quis, imperdiet ac justo. Integer eget tristique massa, eu aliquam ligula. Aenean sodales varius lorem quis consectetur. Sed lobortis luctus risus, id elementum lacus interdum ac. In et urna id ante iaculis finibus. Mauris vel eros imperdiet, suscipit velit sed, eleifend ipsum.\n'}
          subTitle={'The Subtitle'}
          secondDescription={'Second description goes here'}/>

      <ProjectBlock
        link={'https://www.prometric.com/'}
        skills={['drupal', 'php', 'sass', 'jquery']}
        image={'../assets/project-prometric.png'}
        imageAlt={'Prometric'}
        title={'Prometric'}
        mainDescription={'\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at velit erat. Aenean eu accumsan justo. Morbi varius est at diam auctor, sed sagittis ex gravida. Nulla at nibh rhoncus, lobortis lectus non, pretium sem. Curabitur nec magna semper, scelerisque nisi et, malesuada nulla. Nullam ac quam lectus. Morbi sit amet lectus lectus. Vestibulum congue consequat nisl, in consectetur felis venenatis eget. Nunc non magna velit. Ut vitae erat molestie, gravida ex sit amet, tincidunt orci. Fusce lacinia ac felis ac maximus. Donec gravida quis augue eu sagittis.\n' +
        '\n' +
        'Vestibulum molestie mauris ultrices dui lobortis tincidunt. Nam dignissim augue a libero tempor bibendum. Pellentesque venenatis enim vel posuere consectetur. Quisque neque dui, placerat venenatis ultricies quis, imperdiet ac justo. Integer eget tristique massa, eu aliquam ligula. Aenean sodales varius lorem quis consectetur. Sed lobortis luctus risus, id elementum lacus interdum ac. In et urna id ante iaculis finibus. Mauris vel eros imperdiet, suscipit velit sed, eleifend ipsum.\n'}
        subTitle={'The Subtitle'}
        secondDescription={'Second description goes here'}/>

    </div>
  );
};

export default HomePage;
