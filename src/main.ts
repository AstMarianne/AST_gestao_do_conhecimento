import Vue from 'vue';
import {
    Course,
    IConnection,
    Offline,
    Scorm12,
    Utils,
} from 'hands-on-course';
import {
    iCourse,
    components,
    sections,
} from './data';

const utils: Utils = new Utils();
const searchParams = new URLSearchParams(window.location.search);
const isScorm: boolean = searchParams.get('conn') === 'scorm';
const isDebug: boolean = searchParams.get('debug') === '1';
const conn: IConnection = isScorm ? new Scorm12(utils, window) : new Offline();
const course: Course = new Course(iCourse, conn, components, sections, isDebug);

document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#root',
        data: {
            course,
        },
    });
});
