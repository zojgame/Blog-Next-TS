import styles from "./styles.module.scss";
import Link from "next/link";

interface PaginationComponentProps {
  page: number;
}

const PaginationComponent = ({ page }: PaginationComponentProps) => {
  const currentPage = page;
  const startPage = currentPage === 1 ? 1 : currentPage - 1;

  return (
    <div className={styles.pagination}>
      <div className={currentPage === 1 ? ` ${styles.disabled}` : ""}>
        <Link href={`/${currentPage - 1}`} aria-disabled={true}>{`<`}</Link>
      </div>
      <div className={currentPage === 1 ? `${styles.active}` : ""}>
        <Link href={`/${startPage}`}>{startPage}</Link>
      </div>
      <div className={currentPage === startPage + 1 ? `${styles.active}` : ""}>
        <Link href={`/${startPage + 1}`}>{startPage + 1}</Link>
      </div>
      <div>
        <Link href={`/${startPage + 2}`}>{startPage + 2}</Link>
      </div>
      <div>
        <Link href={`/${currentPage + 1}`}>{`>`}</Link>
      </div>
    </div>
  );
};
export { PaginationComponent };
