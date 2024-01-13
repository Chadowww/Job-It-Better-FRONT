import CandidateModalLogin from "@/components/molecules/candidate/CandidateModalLogin.vue";
import { mount } from '@vue/test-utils'
import store from "@/store";

describe('CandidateModalLogin', () => {
  it('should render', () => {
    const wrapper = mount(CandidateModalLogin, {
      global: {
        plugins: [store]
      }
    });

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('Se connecter')
    expect(wrapper.find('button').text()).toBe('Se connecter')
  })
})