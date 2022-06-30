import Aside from '../sidebar/sidebar';

const Houses = () => (

  <div className="container d-flex flex-column flex-md-row">
    <Aside />
    <main className="ps-0 ps-md-5 flex-grow-1">
      <h1>This is the houses component</h1>
      <h2>It will content the houses carousel</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        ultrices auctor ornare. Etiam iaculis non est non dictum.
        Suspendisse lobortis, lectus tristique mollis bibendum, eros urna viverra nulla,
        quis ornare nulla sapien faucibus risus. Fusce in egestas orci. Donec vel nunc
        sed libero rhoncus ullamcorper tempor non orci. Nulla id risus id enim aliquet tempor.
        Mauris lacus nibh, efficitur sed malesuada quis, suscipit ac risus.
        Morbi imperdiet lacinia nisl, quis sollicitudin tortor blandit non.
        Praesent accumsan purus risus, rhoncus eleifend erat rhoncus sit amet.
        Maecenas id molestie erat.

      </p>
    </main>
  </div>
);

export default Houses;
