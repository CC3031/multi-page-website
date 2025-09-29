export default function Card({image, altText, children}) {
    return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 p-3 m-5 flex items-center justify-center w-150">
      <img
        src={image}
        alt={altText}
        className="max-w-xs"
      />

      <div className="p-4">
        <p>
          {children}
        </p>
      </div>
    </div>
    );
}