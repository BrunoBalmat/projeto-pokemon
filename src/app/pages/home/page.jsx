import React, { useState } from 'react';
import './searchScreen.css';
import { Tooltip } from "@nextui-org/react";

export default function SearchScreen() {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 5000);
  };

  return (
    <div className='principal'>
      <div>
        {isSearching ? <Tooltip
          content={<img src="searchingTooltip.png" alt="" />}
          isOpen={true}>
          <button className="tooltip-button" onClick={handleSearch}>
            <img className='ash' src="https://s3-alpha-sig.figma.com/img/1793/f5dd/cf2fa68d85b6e426d80b9acf8f7cbd17?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iR5AvCBAQkLxs8jHSrzuSxKN9ZjVAqmH5Tf2ddeDAzvJe39tRyBAvvDG1U1of8~1AVYQDs5j9gZLGAZuzxDuLzcLYAPlsZr0NnIFTriWf4FfV2UXudJbMRQIG3ZJOTIZzshtLiZdqkTnaOu8dXFOMyrxUnWyZ3v13b448rDfvnf6DhYdITZ1vg74sbUtPYKyKu5nZ4f-aZmdZ7crvAdOcB045RJTjH7~10g1YzOnpvdsLAjT7~6cEEntmBI0fJUO36tCc8L~yUKWc0fGVA4C97sUrvy4FU8K~UFwC5PCdRD6JqwJI~~-YPl82D6KCD7q~HsSC~6vOEckJgvWQHpwUQ__" alt="" />
          </button>
        </Tooltip> : <Tooltip
          content={<img src="base.png" alt="" />} >
          <button className="tooltip-button" onClick={handleSearch}>
            <img className='ash' src="ash.png" alt="" />
          </button>
        </Tooltip>}
      </div>
    </div>
  )
}
