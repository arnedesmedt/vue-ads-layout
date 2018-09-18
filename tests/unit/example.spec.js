import { shallowMount } from '@vue/test-utils';
import VueAdsLayout from '@/components/Layout';

describe('Layout', () => {
    it('renders the layout', () => {
        const wrapper = shallowMount(VueAdsLayout);
        expect(wrapper.props().fullBar).toBe(true);
    });
});
