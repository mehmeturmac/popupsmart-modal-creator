import Appearance from './Appearance';
import Content from './Content';
import Targeting from './Targeting';
import Settings from './Settings';

export default function ModalDetails() {
  return (
    <div className="space-y-16">
      <Appearance />
      <Content />
      <Targeting />
      <Settings />
    </div>
  );
}
