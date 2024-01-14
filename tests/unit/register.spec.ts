import CandidateModalRegister from "@/components/molecules/candidate/CandidateModalRegister.vue";
import { candidateRegister } from "@/services/candidate/CandidateRegistrationService";
import { mount } from "@vue/test-utils";
import store from "@/store";

jest.mock("@/services/candidate/CandidateRegistrationService.ts");

describe("CandidateModalRegister", () => {
  it("should render", () => {
    const wrapper = mount(CandidateModalRegister, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain("S'inscrire");
    expect(wrapper.find("button").text()).toBe("S'inscrire");
  });
});
