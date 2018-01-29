import Stream from './presenter';
import  Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
import { shallow } from 'enzyme';

describe('Stream',()=>{
	const props = {
		tracks: [{ title: 'x' }, { title: 'y' }],
	};

	it('show two elements', ()=>{
		const element = shallow(<Stream {...props} />);

		expect(element.find('.track')).to.have.length(2);
	})

});
